<script>
import { Page, FormTextInput, TextInput, TextAreaInput, SearchBar, PageBody, TextMessageInputBubble } from '$lib/index.js'
</script>

<Page>
    <PageBody>
        <TextInput 
            id="text"
            label="Text"
        />
        <FormTextInput 
            label="label"
            validValue={false}
        />
        <TextAreaInput 
            id="text-area"
            label="Text Area"
            rows="7"
        />
        <SearchBar />
        <TextMessageInputBubble 
            maxlength="120"
        />
    </PageBody>
</Page>