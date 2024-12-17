import type { DetailsHTMLAttributes, FC, HtmlHTMLAttributes, ReactNode } from 'react'
import classnames from '../../utils/classnames'
import Icon from '../Icon'
import s from './Accordion.module.scss'

type BaseProps = Omit<DetailsHTMLAttributes<HTMLDetailsElement>, 'children' | 'ref'>

export interface AccordionPropsType extends BaseProps {
    header: ReactNode
    body: ReactNode
    hasArrow?: boolean
    rootProps?: HtmlHTMLAttributes<HTMLDivElement>
}

const Accordion: FC<AccordionPropsType> = ({ header, body, rootProps = {}, name, hasArrow = true, ...detailsProps }) => {
    return (
        <div {...{ ...rootProps, className: classnames(s.main, rootProps?.className) }}>
            <details
                name={name}
                {...{
                    ...detailsProps,
                    className: classnames(s.details, detailsProps.className)
                }}
            >
                <summary className={s.header}>
                    <div className={s.header_wrapper} role='term' aria-details={name}>
                        {header}
                        {hasArrow && <Icon className={s.arrow} name='arrow-down' />}
                    </div>
                </summary>
            </details>
            <div className={s.body} role='definition'>
                <div className={s.body_wrapper}>{body}</div>
            </div>
        </div>
    )
}

export default Accordion
