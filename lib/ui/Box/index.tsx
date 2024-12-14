import { classnames } from '@lib/utils'
import getUiClasses from '@lib/utils/getUiClasses'
import type { UiClassesType } from '@lib/utils/getUiClasses/const'
import type { FC } from 'react'

type Props = {
    ui?: UiClassesType
} & JSX.IntrinsicElements['div']

const Box: FC<Props> = ({ ui, className, ...rest }) => {
    const uiClasses = getUiClasses(ui)

    return <div className={classnames(uiClasses, className)} {...rest} />
}

export default Box
