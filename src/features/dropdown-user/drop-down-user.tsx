import { useNavigate } from 'react-router-dom'

import { Icon } from '@/components/icon/Icon'
import { DropdownItemContent, DropdownItemHeader } from '@/components/ui/dropdown'

import s from './drop-down-user.module.scss'

type Props = {
  userEmail: string
  userName: string
}
export const DropDownUser = ({ userEmail, userName }: Props) => {
  const navigate = useNavigate()
  const onSelected = () => {
    navigate('/profile')
  }

  return (
    <>
      <DropdownItemHeader
        className={s.DropdownMenuItem}
        userEmail={userEmail}
        userName={userName}
      />
      <DropdownItemContent
        className={s.itemWithIcon}
        icon={<Icon className={s.svgWhite} name={'logoUserDrop'} size={'16px'} />}
        onSelect={onSelected}
        title={'My profile'}
      />
      <DropdownItemContent
        className={s.itemWithIcon}
        icon={<Icon className={s.svgWhite} name={'logout'} size={'16px'} />}
        title={'Sign Out'}
      />
    </>
  )
}
