import {GiftCard} from '../../models'
import {_authAdmin, genGiftCard} from '../../util'
const resolvers = {
  RootQuery: {
    async fetchGiftCards(_, __, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await GiftCard.findAll()
    },
  },
  RootMutation: {
    async genGiftCard(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return genGiftCard(input.amount, input.expiry)
    },
  },
  GiftCard: {
    async userName(giftCard, _, {loggedInUser}) {
      _authAdmin(loggedInUser)
      let customer = await giftCard.getCustomer()
      return customer && customer.get('username')
    },
  },
}
export default resolvers