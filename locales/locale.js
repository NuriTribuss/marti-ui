import tr from './tr'
import de from './de'

const langs = { tr , de };

export default function locale(lang) {
    return langs[lang]
}