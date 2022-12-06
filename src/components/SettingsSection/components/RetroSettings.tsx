import * as Label from '@radix-ui/react-label'
import { Field, Form, Formik } from 'formik'

const RetroSettings = () => (
  <Formik
    initialValues={{
      name: '',
      date: '',
    }}
    onSubmit={() => {
      console.log('test')
    }}
  >
    <Form>
      <fieldset>
        <Label.Root htmlFor='name' className='font-bold'>
          Retro Name:
        </Label.Root>
        <Field
          id='name'
          name='name'
          placeholder='Retrospective'
          className='p-2 m-2 rounded-md outline-2 bg-neutral-100 dark:bg-neutral-700'
        />
      </fieldset>

      <fieldset>
        <Label.Root htmlFor='email' className='font-bold'>
          Retro Date:
        </Label.Root>
        <Field
          id='date'
          name='date'
          placeholder='12.09.2026'
          className='p-2 m-2 rounded-md outline-2 bg-neutral-100 dark:bg-neutral-700'
        />
      </fieldset>
    </Form>
  </Formik>
)

export default RetroSettings
