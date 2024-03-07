import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

import checkEmail from '../../assets/images/check-email.png'

export const CheckEmail = () => {
  const { email } = useParams()

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Check your email
      </Typography>

      <img alt={'check-email'} src={checkEmail} />

      <Typography className={s.text} variant={'body2'}>
        We’ve sent an Email with instructions to {email}
      </Typography>

      <Typography variant={'subtitle2'}>
        <Button as={Link} to={'/login'}>
          Back to login
        </Button>
      </Typography>
    </Card>
  )
}
