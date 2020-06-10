# 前端技术

## HTML

### HTML as 计算机语言

- 语法
- 词法

### HTML as SGML（Standard Generalized Markup Language）https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language

- DTD（ Document Type Definition）（https://en.wikipedia.org/wiki/Document_type_definition）

	- Syntactic
	-  Schema
	- Markup declarations

		- Element type declarations

			- defines an element and its possible content.

		- Attribute list declarations

			- 

				- the declared name of the attribute
				- its data type (or an enumeration of its possible values)
				- its default value

		- Entity declarations
		- Notation declarations

- Entity

	- ....

### HTML as XML

- Namespace

	- svg
	- mathml
	- aria

- Tag

	- html
	- head
	- title
	- base
	- link
	- meta
	- style
	- body
	- article
	- section
	- nav
	- aside
	- h1
	- h2
	- h3
	- h4
	- h5
	- h6
	- hgroup
	- header
	- footer
	- address
	- p
	- hr
	- pre
	- blockquote
	- ol
	- ul
	- menu
	- li
	- dl
	- dt
	- dd
	- figure
	- figcaption
	- main
	- div
	- a
	- em
	- strong
	- small
	- s
	- cite
	- q
	- dfn
	- abbr
	- ruby
	- rt
	- rp
	- data
	- time
	- code
	- var
	- samp
	- kbd
	- sub
	- sup
	- i
	- b
	- u
	- mark
	- bdi
	- bdo
	- span
	- br
	- wbr
	- a
	- area
	- ins
	- del
	- picture
	- source
	- img
	- iframe
	- embed
	- object
	- param
	- video
	- audio
	- track
	- map
	- area
	- table
	- caption
	- colgroup
	- col
	- tbody
	- thead
	- tfoot
	- tr
	- td
	- th
	- form
	- label
	- input
	- button
	- select
	- datalist
	- optgroup
	- option
	- textarea
	- output
	- progress
	- meter
	- fieldset
	- legend
	- details
	- summary
	- dialog
	- script
	- noscript
	- template
	- slot
	- canvas

## JavaScript

### Grammar

- Lex

	-     WhiteSpace
	-     LineTerminator 
	-     Comment
	-     Token

		-         Identifier
		-         Keywords
		-         Punctuator
		-         NumericLiteral
		-         StringLiteral
		-         RegularExpressionLiteral
		-         Template

- Syntax

	- Atom
	- Expression
	- Structure
	- Script & Module

### 语义(Semantics)

### 运行时（Runtime）

- Type

	- Number
	- String
	- Boolean
	- Null
	- Undefined
	- Object
	- Symbol
	- 内部类型

		- Reference
		- Completion Record
		- .....

- 执行过程

	- Job
	- Script/Module
	- Promise
	- Function
	- Statement
	- Expression
	- Literal
	- Identifier

## CSS

### 语法/词法

### @规则

- @charset
- @import
- @namespace
- @media
- @supports
- @page
- @document
- @font-face
- @keyframes
- @viewport
- @counter-style
- @font-feature-values

### 普通规则

- 选择器

	- 简单选择器

		- .cls
		- #id
		- tagname
		- *
		- [attr=v]

	- 复合选择器
	- 复杂选择器
	- 选择器列表

- Property

	- layout

		- CSS Writing Modes

			- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Writing_Modes

				- direction
				- writingMode
				- textCombineUpright
				- textOrientation
				- unicodeBidi

		- CSS Logical Properties and Values

			- paddingBlock

				- paddingBlockEnd
				- paddingBlockStart

			- paddingInline

				- paddingInlineEnd
				- paddingInlineStart

			- borderInline

				- borderInlineStart

					- borderInlineStartColor
					- borderInlineStartStyle
					- borderInlineStartWidth

				- borderInlineEnd

					- borderInlineEndColor
					- borderInlineEndStyle
					- borderInlineEndWidth

			- borderBlock

				- borderBlockEnd

					- borderBlockEndColor
					- borderBlockEndStyle
					- borderBlockEndWidth

				- borderBlockStart

					- borderBlockStartColor
					- borderBlockStartStyle
					- borderBlockStartWidth

			- marginBlock

				- marginBlockStart
				- marginInlineEnd

			- inlineSize

				- maxInlineSize
				- minInlineSize

			-  blockSize

				- maxBlockSize
				- minBlockSize

		- CSS Positioned Layout

			- position

				- bottom
				- left
				- top
				- right
				- zIndex

			- float

				- clear
				- float

		- CSS Basic Box Model

			- margin

				- marginBottom
				- marginLeft
				- marginRight
				- marginTop

			- padding

				- paddingBottom
				- paddingLeft
				- paddingRight
				- paddingTop

			- height

				-  minHeight
				-  maxHeight

			- width

				- maxWidth
				- minWidth

			- overscrollBehavior

				- overscrollBehaviorX
				- overscrollBehaviorY

			- overscrollBehaviorBlock
			- overscrollBehaviorInline
			- visibility

		- CSS Display

			- box

				- contents
				- none

			- inside

				- flow
				- flow-root
				- table(CSS Table)

					- captionSide
					- tableLayout
					- emptyCells
					- verticalAlign

				- flex(CSS Flexible Box Layout )

					- flex

						- flexGrow
						- flexShrink
						- flexBasis

					- flexFlow

						- flexDirection
						- flexWrap

					- flexWrap
					- order

				- grid

					- grid
					- gridArea
					- gridAutoColumns
					- gridAutoFlow
					- gridAutoRows
					- gridColumn

						- gridColumnEnd
						- gridColumnStart

					- gridRow

						- gridRowEnd
						- gridRowStart

					- gridGap

						- gridColumnGap

							- row-gap
							- column-gap

						- gridRowGap

					- gridTemplate

						- gridTemplateAreas
						- gridTemplateColumns
						- gridTemplateRows

				- ruby

			- internal

				- table

					- table-row-group
					- table-row
					- table-footer-group
					- table-header-group
					- table-cell
					- table-column-group
					- table-column
					- table-caption

				- ruby

					- ruby-base
					- ruby-text
					- ruby-base-container
					- ruby-text-container

			- legacy

				- inline-block
				- inline-table
				- inline-flex
				- inline-grid

			- outside

				- block
				- inline
				- run-in

			- list-item

		- CSS Box Alignment module

			- placeContent

				- alignContent
				- justifyContent

			- placeItems

				- alignItems
				- justifyItems

			- placeSelf

				- alignSelf

					- https://developer.mozilla.org/en-US/docs/Web/CSS/align-self

				- justifySelf

		- CSS Multi-column Layout

			- columnCount
			- columnFill
			- columnGap
			- columnRule

				- columnRuleColor
				- columnRuleStyle
				- columnRuleWidth

			- columnSpan
			- columnWidth
			- columns

		- CSS Generated Content 

			- content
			- quotes

		- CSS Lists

			- listStyle
			- listStyleImage
			- listStylePosition
			- listStyleType

		- lineHeight
		- CSS Shapes

			- shapeImageThreshold
			- shapeMargin
			- shapeOutside

		- @page

			- size

	- interactive

		- animation

			- https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function

				- animationDelay
				- animationDirection
				- animationDuration
				- animationFillMode
				- animationIterationCount
				- animationName
				- animationPlayState
				- animationTimingFunction

		- CSS Basic User Interface 

			- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Basic_User_Interface

				- caretColor

					- https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color

				- cursor
				- outline

					- outlineColor
					- outlineOffset
					- outlineStyle

				- outlineWidth
				- resize
				- textOverflow
				- userSelect

		- CSS Device Adaptation

			- maxZoom
			- minZoom

		- Motion Path

			- offset

				- offsetDistance
				- offsetPath
				- offsetRotate

		- Media queries

			- orientation

		- CSSOM View

			- scrollBehavior

		- CSS Scroll Snap

			- scrollMargin

				- scrollMarginBottom
				- scrollMarginLeft
				- scrollMarginRight
				- scrollMarginTop

			- scrollMarginBlock

				- scrollMarginBlockEnd
				- scrollMarginBlockStart

			- scrollMarginInline

				- scrollMarginInlineStart
				- scrollMarginInlineEnd

			- scrollPaddingBlock

				- scrollPaddingBlockStart
				- scrollPaddingBlockEnd

			- scrollPaddingInline

				- scrollPaddingInlineEnd
				- scrollPaddingInlineStart

			- scrollPadding

				- scrollPaddingBottom
				- scrollPaddingLeft
				- scrollPaddingRight
				- scrollPaddingTop

			- scrollSnapAlign
			- scrollSnapStop
			- scrollSnapType

				- scrollSnapTypeX
				- scrollSnapTypeY

		- CSS Transforms

			- transform
			- transformBox
			- transformOrigin
			- transformStyle
			- perspective
			- perspectiveOrigin

		- CSS Transitions

			- transition

				- transitionProperty
				- transitionDuration
				- transitionTimingFunction
				- transitionDelay

		- pointerEvents
		- touchAction

	- render/draw

		- backfaceVisibility

			- https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility

		- background

			- backgroundAttachment
			- backgroundBlendMode
			- backgroundClip
			- backgroundColor
			- backgroundImage
			- backgroundOrigin
			- backgroundPosition

				- backgroundPositionX
				- backgroundPositionY

			- backgroundRepeat

				- backgroundRepeatX
				- backgroundRepeatY

			- backgroundSize

		- border

			- borderTop

				- borderTopColor
				- borderTopLeftRadius
				- borderTopRightRadius
				- borderTopStyle
				- borderTopWidth

			- borderRight

				- borderRightColor
				- borderRightStyle
				- borderRightWidth

			- borderBottom

				- borderBottomColor
				- borderBottomLeftRadius
				- borderBottomRightRadius
				- borderBottomStyle
				- borderBottomWidth

			- borderLeft

				- borderLeftColor
				- borderLeftStyle
				- borderLeftWidth

			- borderRadius
			- borderCollapse
			- borderSpacing
			- borderColor
			- borderStyle
			- borderWidth
			- borderImage

				- borderImageOutset
				- borderImageRepeat
				- borderImageSlice
				- borderImageSource
				- borderImageWidth

		- boxShadow
		- boxSizing
		- box-decoration-break

			- pageBreakAfter -> breakAfter
			- pageBreakBefore -> breakBefore
			- pageBreakInside -> breakInside
			- orphans
			- widows

		- CSS Masking

			- clip
			- clipPath
			- clipRule
			- mask

		- Filter Effects

			- backdropFilter

				- https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

			- filter

		- CSS Color

			- color
			- opacity

		- CSS Fonts

			- font

				- fontFamily
				- fontFeatureSettings
				- fontOpticalSizing
				- fontSize
				- fontStretch
				- fontStyle
				- fontVariant

					- fontVariantCaps
					- fontVariantEastAsian
					- fontVariantLigatures
					- fontVariantNumeric

				- fontVariationSettings
				- fontWeight
				- @font-face

					- src
					- unicodeRange

		- CSS Text 

			- hyphens
			- letterSpacing
			- lineBreak
			- overflowWrap
			- tabSize
			- textAlign
			- textAlignLast
			- textSizeAdjust
			- textIndent
			- textTransform
			- whiteSpace
			- wordBreak
			- wordSpacing

		- CSS Text Decoration

			- textDecoration

				- textDecorationColor
				- textDecorationLine
				- textDecorationStyle

			- textDecorationSkip
			- textDecorationSkipInk
			- textShadow
			- textUnderlinePosition

		- CSS Images

			- imageRendering
			- objectFit
			- objectPosition

		- contain

			- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment

		- @counter-style

			- counterIncrement
			- counterReset

		- Compositing and Blending

			- backgroundBlendMode
			- isolation
			- mixBlendMode

		- CSS Overflow

			- overflow

				- overflowX
				- overflowY

		- willChange

	- else

		- all

			- https://developer.mozilla.org/en-US/docs/Web/CSS/all

	- svg

		- alignmentBaseline

			- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline

		- bufferedRendering 
		- colorInterpolation
		- colorInterpolationFilters
		- cx
		- cy
		- d
		- dominantBaseline
		- fill
		- fillOpacity
		- fillRule
		- floodColor
		- floodOpacity
		- lightingColor
		- marker

			- markerEnd
			- markerMid
			- markerStart

		- paintOrder
		- pointerEvents
		- r
		- rx
		- ry
		- shapeRendering
		- stopColor
		- stopOpacity
		- stroke
		- strokeDasharray
		- strokeDashoffset
		- strokeLinecap
		- strokeLinejoin
		- strokeMiterlimit
		- strokeOpacity
		- strokeWidth
		- textAnchor
		- textRendering
		- vectorEffect
		- visibility
		- x
		- y

	- unkown

		- colorScheme
		- containIntrinsicSize
		- fontDisplay
		- overflowAnchor

			- https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor

		- speak
		- @viewport

			- userZoom
			- zoom

		- wordWrap

	- deprecated 

		- imageOrientation
		- colorRendering(Obsolete)
