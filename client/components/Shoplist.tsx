import { ChangeEvent, FormEvent, useState } from "react"
import { addList } from "../actions/shoplists"
import { useAppDispatch } from "../hooks/hooks"

export default function Shoplist() {


  const [shoppingList, setShoppingList] = useState([] as null | any)
  const [formItems, setFormItems] = useState('')
  const dispatch = useAppDispatch()

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log('submit')
    const shopListArr = [...shoppingList, formItems]
    setShoppingList(shopListArr)
    console.log(shoppingList)
  }

  async function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const {value} = evt.currentTarget
    setFormItems(value)
  }
  return (<>
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder="Add an item here" onChange={handleChange}/>
      <button type="submit">Add Item to list</button>
    </form>
    {shoppingList && shoppingList.map(item => (<p>{item}</p>))}
  </>)
}