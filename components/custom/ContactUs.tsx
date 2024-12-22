import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
// import {
//   NativeSelectField,
//   NativeSelectRoot,
// } from "@/components/ui/native-select"

const ContactUs = () => {
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend color="black">Contact details</Fieldset.Legend>
        <Fieldset.HelperText color="black">
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>
      <Fieldset.Content>
    
    <Field label="Name">
    <h4 style={{ color: 'black' }}>Name</h4>
      <Input name="name" color="black" backgroundColor="white" />
    </Field>
    
    
    <Field label="Email address">
    <h4 style={{ color: 'black' }}>Email address</h4>
      <Input name="email" type="email" color="black" backgroundColor="white" />
    </Field>
  </Fieldset.Content>
<br />
      <Button type="submit" alignSelf="flex-start" bg="black" color="white">
        Submit
      </Button>
    </Fieldset.Root>
  )
}

export default ContactUs;
