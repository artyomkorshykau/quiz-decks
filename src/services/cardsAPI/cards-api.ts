import { baseApi } from '@/services/base-api'
import { CardRate, CardResponse, CardsItem, CardsParams } from '@/services/cardsAPI/cards-api-types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCardsInDeck: builder.mutation<Omit<CardsItem, 'grade'>, { data: FormData; id: string }>(
        {
          invalidatesTags: ['Cards'],
          query: arg => {
            return {
              body: arg.data,
              method: 'POST',
              url: `v1/decks/${arg.id}/cards`,
            }
          },
        }
      ),
      deleteCard: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: arg => ({
          body: arg,
          method: 'DELETE',
          url: `v1/cards/${arg.id}`,
        }),
      }),
      getCardsInDeck: builder.query<CardResponse, { packId: string; params: CardsParams }>({
        query: arg => {
          return {
            method: 'GET',
            params: arg.params ?? {},
            url: `v1/decks/${arg.packId}/cards`,
          }
        },
      }),
      getLearnCard: builder.query<CardsItem, { id: string }>({
        query: arg => ({
          method: 'GET',
          params: arg,
          url: `v1/decks/${arg.id}/learn`,
        }),
      }),
      updateCard: builder.mutation<Omit<CardsItem, 'grade'>, { cardId: string; data: FormData }>({
        invalidatesTags: ['Cards'],
        query: ({ cardId, data }) => ({
          body: data,
          method: 'PATCH',
          url: `v1/cards/${cardId}`,
        }),
      }),
      updateRateCard: builder.mutation<CardsItem, CardRate>({
        query: ({ packId, ...rest }) => ({
          method: 'POST',
          params: rest,
          url: `v1/decks/${packId}/learn`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardsInDeckMutation,
  useDeleteCardMutation,
  useGetCardsInDeckQuery,
  useGetLearnCardQuery,
  useLazyGetCardsInDeckQuery,
  useLazyGetLearnCardQuery,
  useUpdateCardMutation,
  useUpdateRateCardMutation,
} = cardsApi
