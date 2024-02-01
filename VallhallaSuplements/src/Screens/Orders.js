import { FlatList } from 'react-native'
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <FlatList
        data={null}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
    />
  )
}

export default Orders