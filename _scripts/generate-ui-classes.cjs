/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

;(async () => {
    const BREAKPOINTS = (await import('../dist/const/breikpoints.js')).default
    const { BASE_UI_CLASSES } = await import('../dist/utils/getUiClasses/const/index.js')
    const CSS_PROPERTIES_MAP = (await import('../dist/utils/getUiClasses/const/properties-map.js')).default
    const sanitalizeClassName = (await import('../dist/utils/getUiClasses/lib/sanitalizeClassName/index.js')).default

    const getCssValue = (await import('../dist/utils/getUiClasses/lib/getCssValue/index.js')).default

    const outputPath = path.resolve(__dirname, '../lib/styles/generated-ui-classes.scss')

    const generateSCSS = () => {
        let scssContent = ''

        Object.entries(BASE_UI_CLASSES).forEach(([key, values]) => {
            const cssProperty = CSS_PROPERTIES_MAP[key]

            if (!cssProperty) return

            if (Array.isArray(values)) {
                values.forEach((value) => {
                    const processedValue = getCssValue(key, value)
                    const className = sanitalizeClassName(key, value)

                    scssContent += `.${className} {\n  ${cssProperty}: ${processedValue};\n}\n`
                })
            }
        })

        Object.keys(BREAKPOINTS).forEach((bp) => {
            scssContent += `\n/* ${bp} breakpoint */\n`
            scssContent += `@media (max-width: ${BREAKPOINTS[bp]}px) {\n`

            Object.entries(BASE_UI_CLASSES).forEach(([key, values]) => {
                const cssProperty = CSS_PROPERTIES_MAP[key]

                if (!cssProperty) return

                if (Array.isArray(values)) {
                    values.forEach((value) => {
                        const processedValue = getCssValue(key, value)
                        const className = sanitalizeClassName(key, value)

                        scssContent += `  .${bp}-${className} {\n    ${cssProperty}: ${processedValue};\n  }\n`
                    })
                }
            })

            scssContent += '}\n'
        })

        fs.writeFileSync(outputPath, scssContent)
        console.log(`Scss file generated successfully to ${outputPath} 🎉`)

        return scssContent
    }

    generateSCSS()
})()
