import { ChangeEvent, FormEvent, useState } from "react"
import { addList } from "../actions/shoplists"
import { useAppDispatch } from "../hooks/hooks"

export default function Shoplist() {

  const [formItems, setFormItems] = useState('')
  const dispatch = useAppDispatch()

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log('submit')
    const newShopList = {
      list: [formItems]
    }
    dispatch(addList(newShopList))
  }

  async function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const {value} = evt.currentTarget
    setFormItems(value)
  }
  return (<>
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder="Add an item here" onChange={handleChange}/>
      <button type="submit">Add Items to list</button>
    </form>
  </>)
}