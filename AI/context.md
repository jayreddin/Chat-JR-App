# Puter.js AI Documentation

The Puter.js AI feature allows you to integrate artificial intelligence capabilities into your applications.

You can use AI models from various providers to perform tasks such as chat, text-to-image, image-to-text, text-to-video, and text-to-speech conversion. And with the [User-Pays Model](/user-pays-model/), you don't have to set up your own API keys and top up credits, because users cover their own AI costs.

## Features

- AI Chat
- Text to Image
- Image to Text
- Text to Speech
- Voice Changer
- Text to Video
- Speech to Speech
- Speech to Text

---

## AI Functions

### puter.ai.chat()

Chat with AI models, analyze images, and perform function calls using 500+ models from OpenAI, Anthropic, Google, and more.

#### Syntax

```js
puter.ai.chat(prompt)
puter.ai.chat(prompt, options = {})
puter.ai.chat(prompt, testMode = false, options = {})
puter.ai.chat(prompt, image, testMode = false, options = {})
puter.ai.chat(prompt, [imageURLArray], testMode = false, options = {})
puter.ai.chat([messages], testMode = false, options = {})
```

#### Parameters

##### `prompt` (String)
A string containing the prompt you want to complete.

##### `options` (Object) (Optional)
An object containing the following properties:
- `model` (String) - The model you want to use for the completion. If not specified, defaults to `gpt-5-nano`.
- `stream` (Boolean) - A boolean indicating whether you want to stream the completion. Defaults to `false`.
- `max_tokens` (Number) - The maximum number of tokens to generate in the completion.
- `temperature` (Number) - A number between 0 and 2 indicating the randomness of the completion.
- `tools` (Array) (Optional) - Function definitions the AI can call.
- `reasoning_effort` (String) (Optional) - Controls how much effort reasoning models spend thinking.
- `text_verbosity` (String) (Optional) - Controls how long or short responses are.

##### `testMode` (Boolean) (Optional)
A boolean indicating whether you want to use the test API. Defaults to `false`.

##### `image` (String | File)
A string containing the URL or Puter path of the image, or a `File` object.

##### `imageURLArray` (Array)
An array of strings containing the URLs of images.

##### `messages` (Array)
An array of objects containing the messages you want to complete. Each object must have a `role` and a `content` property.

---

### puter.ai.img2txt()

Extract text from images using OCR to read printed text, handwriting, and any text-based content.

#### Syntax

```js
puter.ai.img2txt(image, testMode = false)
puter.ai.img2txt(image, options = {})
puter.ai.img2txt({ source: image, ...options })
```

#### Parameters

##### `image` / `source` (String|File|Blob) (required)
A string containing the URL or Puter path, or a `File`/`Blob` object containing the source image or file.

---

### puter.ai.listModelProviders()

Retrieve the available AI providers that Puter currently exposes.

#### Syntax

```js
puter.ai.listModelProviders()
```

#### Return value
A `Promise` that will resolve to an array of string containing each AI providers.

---

### puter.ai.listModels()

Retrieve the available AI chat models (and providers) that Puter currently exposes.

#### Syntax

```js
puter.ai.listModels(provider = null)
```

#### Return value
Resolves to an array of model objects. Each object always contains `id` and `provider`, and may include fields such as `name`, `aliases`, `context`, `max_tokens`, and a `cost` object.

---

### puter.ai.speech2speech()

Transform an audio clip into a different voice using ElevenLabs speech-to-speech.

#### Syntax

```js
puter.ai.speech2speech(source, testMode = false)
puter.ai.speech2speech(source, options, testMode = false)
puter.ai.speech2speech({ audio: source, ...options })
```

#### Parameters

##### `source` (String | File | Blob) (required unless provided in options)
Audio to convert. Accepts a Puter path, a `File` or `Blob`, a data URL, or a remote HTTPS URL.

---

### puter.ai.speech2txt()

Transcribe or translate audio into text using OpenAI speech-to-text models.

#### Syntax

```js
puter.ai.speech2txt(source, testMode = false)
puter.ai.speech2txt(source, options, testMode = false)
puter.ai.speech2txt({ audio: source, ...options })
```

#### Parameters

##### `source` (String | File | Blob) (required unless provided in options)
Audio to transcribe.

---

### puter.ai.txt2img()

Given a prompt, generate an image using AI.

#### Syntax

```js
puter.ai.txt2img(prompt, testMode = false)
puter.ai.txt2img(prompt, options = {})
puter.ai.txt2img({ prompt, ...options })
```

#### Parameters

##### `prompt` (String) (required)
A string containing the prompt you want to generate an image from.

---

### puter.ai.txt2vid()

Create AI-generated video clips directly from text prompts using OpenAI Sora models.

#### Syntax

```js
puter.ai.txt2vid(prompt, testMode = false)
puter.ai.txt2vid(prompt, options = {})
puter.ai.txt2vid({prompt, ...options})
```

#### Parameters

##### `prompt` (String) (required)
The text description that guides the video generation.