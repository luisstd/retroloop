import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface MagicLinkEmailProps {
  magicLink: string
}

export default function MagicLinkEmail({ magicLink }: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Sign in to Retroloop</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Sign in to Retroloop</Heading>
          <Text style={text}>
            Click the button below to sign in to your account. This link will
            expire in 5 minutes.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={magicLink}>
              Sign in
            </Button>
          </Section>
          <Text style={text}>
            If you didn&apos;t request this email, you can safely ignore it.
          </Text>
          <Text style={footer}>
            Or copy and paste this URL into your browser:{' '}
            <Link href={magicLink} style={link}>
              {magicLink}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f7f7f8',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: '40px 20px',
}

const container = {
  margin: '0 auto',
  padding: '32px',
  maxWidth: '560px',
  backgroundColor: '#ffffff',
  border: '2px solid #4a4a4d',
  borderRadius: '8px',
  boxShadow: '4px 4px 0 0 #4a4a4d',
}

const h1 = {
  color: '#333335',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '0 0 20px',
}

const text = {
  color: '#333335',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 20px',
}

const buttonContainer = {
  padding: '24px 0',
  textAlign: 'center' as const,
}

const button = {
  backgroundColor: '#435BCF',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
  border: '2px solid #4a4a4d',
  boxShadow: '4px 4px 0 0 #4a4a4d',
}

const footer = {
  color: '#6b6b70',
  fontSize: '14px',
  lineHeight: '1.5',
  marginTop: '24px',
  paddingTop: '24px',
  borderTop: '1px solid #e5e5e7',
}

const link = {
  color: '#435BCF',
  textDecoration: 'underline',
  wordBreak: 'break-all' as const,
}
