import { Field, Form, Formik } from 'formik'
import * as Label from '@radix-ui/react-label'
import React from 'react'

const ProfileSettings = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
    }}
    onSubmit={() => {
      console.log('test')
    }}
  >
    <Form>
      <fieldset>
        <Label.Root htmlFor='name' className='font-bold'>
          Name:
        </Label.Root>
        <Field
          id='name'
          name='name'
          placeholder='Your Name'
          className='p-2 m-2 rounded-md outline-2 bg-neutral-100 dark:bg-neutral-700'
        />
      </fieldset>

      <fieldset>
        <Label.Root htmlFor='email' className='font-bold'>
          E-Mail:
        </Label.Root>
        <Field
          id='email'
          name='email'
          placeholder='user@mail.com'
          className='p-2 m-2 rounded-md outline-2 bg-neutral-100 dark:bg-neutral-700'
        />
      </fieldset>
    </Form>
  </Formik>
)

export default ProfileSettings
