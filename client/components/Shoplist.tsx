import { ChangeEvent, FormEvent, useState } from "react"
import { addItemAPI, getShopListAPI, deleteItemAPI } from "../apis/shoplists"
import { useEffect } from "react"

export default function Shoplist() {

  const [shoppingList, setShoppingList] = useState([] as string[])
  const [formItems, setFormItems] = useState('')
  const [activeList, setActiveList] = useState(null as any)

  useEffect(() => {
    getShopListAPI()
      .then((currentList) => {
        setActiveList(currentList)
        console.log(currentList)
      })
  }, [])

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    let shopListArr = [...shoppingList, formItems]
    setShoppingList(shopListArr)
    console.log(formItems)
    await addItemAPI(formItems)
    shopListArr = []
  }

  async function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget
    setFormItems(value)
  }

  async function handleDelete(index: number) {
    // do something to delete the item from the list
    console.log(activeList[index])
    await deleteItemAPI(activeList[index])
  }

  return (<>

    <h3>Shopping list</h3>
    {activeList && activeList.map((item: string, i: number) => (<p key={i}>{item} <button onClick={() => handleDelete(i)} key={i} type='button'>-</button></p>))}

    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="Add an item here" onChange={handleChange} />
      <button type="submit">Add Item to list</button>
    </form>
    {shoppingList && <p>{shoppingList}</p>}
  </>)
}