import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import './index.scss'
import '../articles/style.scss'
import { Stamp } from '../stamp'
import { StampList } from '../stamp-list'
import { completionDateInfo } from '../../utils/completion-date-info'
import { defaultMerit } from '../../utils/default-merit'
import { findIncompleteStep } from '../../utils/find-incomplete-step'
import { Ribbon } from '../ribbon'

function onStepClick() {
  const { handleCardClick } = this.props
  handleCardClick && handleCardClick(this.state.id)
}

function onStampClick(index) {
  const { handleCardClick, isActive } = this.props
  handleCardClick && handleCardClick(this.state.id)
  if (!isActive) return
  this.setState({
    activeIndex: index,
  })
}

function descriptionTemplate() {
  const { theme } = this.props.merit || defaultMerit

  return (
    this.props.isActive && (
      <div
        style={{
          backgroundColor: theme.foregrounColor,
        }}
        className={'article description'}
      >
        <ReactMarkdown source={this.state.article} escapeHtml={false} />
      </div>
    )
  )
}

export class Card extends React.Component {
  constructor(props) {
    super(props)
    const { steps } = this.props.merit || defaultMerit

    this.state = {
      activeIndex: findIncompleteStep(this.props.userData, steps) || 0,
      article: null,
      articleFile: null,
    }
  }

  async componentDidUpdate(prevProps) {
    const { steps } = this.props.merit || defaultMerit
    const step = steps[this.state.activeIndex]

    if (!step) {
      this.state.article && this.setState({ article: null, articleFile: null })
      return
    }

    const markdownFile = `./merits/${step.id}.md`
    if (markdownFile === this.state.articleFile) {
      return
    }

    try {
      const result = await fetch(markdownFile)
      this.setState({
        article: await result.text(),
        articleFile: markdownFile,
      })
    } catch (err) {
      this.setState({ article: err, articleFile: err })
    }
  }

  render() {
    const { name, theme, steps } = this.props.merit || defaultMerit
    const { userData } = this.props

    const stamps = steps?.map((step, index) => {
      const completeInfo = completionDateInfo(userData, step)
      return (
        <Stamp
          key={uuidv4()}
          date={completeInfo.isDateValid ? completeInfo.date : null}
          isActive={this.props.isActive && index === this.state.activeIndex}
          handleStampClick={() => onStampClick.call(this, index)}
          theme={theme}
        />
      )
    })

    let classes = ['card']
    if (this.props.isActive) classes.push('isActive')
    const isActiveIndexComplete = completionDateInfo(
      userData,
      steps[this.state.activeIndex]
    ).isDateValid

    return (
      <div
        className={classes.join(' ')}
        style={{
          backgroundColor: theme.backgroundColor,
        }}
        onClick={onStepClick.bind(this)}
      >
        <header
          style={{
            backgroundColor: theme.foregrounColor,
          }}
        >
          {name}
        </header>

        {descriptionTemplate.call(
          this,
          steps[this.state.activeIndex]?.markdown
        ) || null}
        {this.props.isActive && !isActiveIndexComplete ? (
          <Ribbon
            text="Get Miles!"
            handleClick={() =>
              this.props.handleSaveCompletion.call(
                this,
                steps[this.state.activeIndex].id,
                (this.state.activeIndex + 1) * 100
              )
            }
          />
        ) : null}
        <StampList stamps={stamps}></StampList>
      </div>
    )
  }
}
