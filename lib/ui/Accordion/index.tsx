import type { DetailsHTMLAttributes, FC, HtmlHTMLAttributes, ReactNode } from 'react'
import { classnames } from '../../utils'
import s from './Accordion.module.scss'

type BaseProps = Omit<DetailsHTMLAttributes<HTMLDetailsElement>, 'children' | 'ref'>

interface Props extends BaseProps {
    header: ReactNode
    body: ReactNode
    rootProps?: HtmlHTMLAttributes<HTMLDivElement>
}

export const Accordion: FC<Props> = ({ header, body, rootProps = {}, name, ...detailsProps }) => {
    return (
        <div {...{ ...rootProps, className: classnames(s.main, rootProps?.className) }}>
            <details
                name={name}
                {...{
                    ...detailsProps,
                    className: classnames(s.accordion__details, detailsProps.className)
                }}
            >
                <summary>
                    <span role='term' aria-details={name}>
                        {header}
                    </span>
                </summary>
            </details>
            <div className={s.accordion__content} id={name} role='definition'>
                <div className={s['accordion__content-body']}>{body}</div>
            </div>
        </div>
    )
}
