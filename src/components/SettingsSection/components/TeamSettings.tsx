import * as Label from '@radix-ui/react-label'
import { Field, Form, Formik } from 'formik'

const TeamSettings = () => (
  <Formik
    initialValues={{
      name: '',
    }}
    onSubmit={() => {
      console.log('test')
    }}
  >
    <Form>
      <fieldset>
        <Label.Root htmlFor='name' className='font-bold'>
          Team Name:
        </Label.Root>
        <Field
          id='name'
          name='name'
          type='text'
          placeholder='Team Name'
          className='p-2 m-2 rounded-md outline-2 bg-neutral-200 dark:bg-neutral-700'
        />
      </fieldset>
    </Form>
  </Formik>
)

export default TeamSettings
