import * as Label from '@radix-ui/react-label'
import { Field, Form, Formik } from 'formik'

const LanguageSettings = () => (
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
        <Label.Root htmlFor='language' className='font-bold'>
          Language:
        </Label.Root>
        <Field
          id='language'
          name='language'
          placeholder='Select Language'
          className='p-2 m-2 rounded-md outline-2 bg-neutral-200 dark:bg-neutral-700'
        />
      </fieldset>
    </Form>
  </Formik>
)

export default LanguageSettings
