import defaultMask from '@/assets/images/not-img.jpg'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { DeleteCardButton } from '@/features/delete-card-button'
import { EditCard } from '@/features/edit-card'
import { CardsItem } from '@/services/cards-api/cards-api-types'
import { formatDate } from '@/utils/format-date'

import s from '@/components/cards/cards.module.scss'

type Props = {
  deckName?: string
  isMyPack: boolean
  items: CardsItem
}

export const ContentTable = ({ deckName = '', isMyPack, items }: Props) => {
  return (
    <Table.Row key={items.id}>
      <Table.Cell className={s.questionCell}>
        <img alt={'Pack cover'} className={s.questionImg} src={items.questionImg || defaultMask} />
        <p>{items.question}</p>
      </Table.Cell>
      <Table.Cell className={s.answerCell}>
        <img alt={'Pack cover'} className={s.answerImg} src={items.answerImg || defaultMask} />
        <p>{items.answer}</p>
      </Table.Cell>
      <Table.Cell className={s.dateCell}>{formatDate(items.updated)}</Table.Cell>
      <Table.Cell className={s.rateCell}>
        <Rating rating={items.grade} />
      </Table.Cell>

      {isMyPack && (
        <Table.Cell>
          <div className={s.editButtons}>
            <EditCard
              answer={items.answer}
              answerImg={items.answerImg}
              cardId={items.id}
              question={items.question}
              questionImg={items.questionImg}
            />
            <DeleteCardButton id={items.id} name={deckName} />
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  )
}
