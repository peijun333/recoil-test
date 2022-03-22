import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
})

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  },
})

export const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState)
  const count = useRecoilValue(charCountState)
  return (
    <div>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <br />
      Echo: {text}
      <div>Character Count: {count}</div>
    </div>
  )
}
