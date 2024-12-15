import type { FC } from 'react'
import classnames from '../../utils/classnames'
import type { UiClassesType } from '../../utils/getUiClasses'
import getUiClasses from '../../utils/getUiClasses'

type Props = {
    ui?: UiClassesType
} & JSX.IntrinsicElements['div']
export type BoxPropsType = Parameters<typeof Box>[0]

const Box: FC<Props> = ({ ui, className, ...rest }) => {
    const uiClasses = getUiClasses(ui)

    return <div className={classnames(uiClasses, className)} {...rest} />
}

export default Box
