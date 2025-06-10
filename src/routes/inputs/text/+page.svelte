<script>
import { FormTextInput, TextInput, TextAreaInput, SearchBar, TextMessageInputBubble } from '$lib/index.js'
</script>

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