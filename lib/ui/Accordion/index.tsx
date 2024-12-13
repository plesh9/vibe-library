import type { DetailsHTMLAttributes, FC, HtmlHTMLAttributes, ReactNode } from 'react'
import { classnames } from '../../utils'
import s from './Accordion.module.scss'

type BaseProps = Omit<DetailsHTMLAttributes<HTMLDetailsElement>, 'children' | 'ref'>

interface Props extends BaseProps {
    header: ReactNode
    body: ReactNode
    rootProps?: HtmlHTMLAttributes<HTMLDivElement>
}

const Accordion: FC<Props> = ({ header, body, rootProps = {}, name, ...detailsProps }) => {
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
                    <div role='term' aria-details={name}>
                        {header}
                    </div>
                </summary>
            </details>
            <div className={s.accordion__content} role='definition'>
                <div className={s['accordion__content-body']}>{body}</div>
            </div>
        </div>
    )
}

export default Accordion
