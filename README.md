
![Logo](app/public/assets/images/edunote-logo-light.png)

![Static Badge](https://img.shields.io/badge/EDUNOTE-black?logo=e&link=https%3A%2F%2Fbtk-hackathon-24-beta.vercel.app%2F)
![Static Badge](https://img.shields.io/badge/erenorhun-black?logo=github&link=https%3A%2F%2Fgithub.com%2Felymsyr%2F)
![Static Badge](https://img.shields.io/badge/erayates-black?logo=github&link=https%3A%2F%2Fgithub.com%2Ferayates%2F)![Static Badge](https://img.shields.io/badge/utkukayaa-black?logo=github&link=https%3A%2F%2Fgithub.com%2FUtkuKayaa%2F)

![Static Badge](https://img.shields.io/badge/Vercel-black?logo=vercel&link=https%3A%2F%2Fvercel.com%2F)
![Static Badge](https://img.shields.io/badge/Next.JS-black?logo=nextdotjs&link=https%3A%2F%2Fnextjs.org%2F)
![NPM Version](https://img.shields.io/npm/v/tailwindcss?logo=tailwindcss&label=tailwindcss&link=https%3A%2F%2Ftailwindcss.com%2F)
![Static Badge](https://img.shields.io/badge/FastAPI-white?logo=fastapi&link=https%3A%2F%2Ffastapi.tiangolo.com%2F)
![Docker Image Version](https://img.shields.io/docker/v/elymsyr/btk-file-02?arch=amd64&logo=docker&label=Docker&link=https%3A%2F%2Fhub.docker.com%2Frepositories%2Felymsyr)

![GitHub commit activity](https://img.shields.io/github/commit-activity/t/erayates/btk-hackathon-24)
![GitHub Created At](https://img.shields.io/github/created-at/erayates/btk-hackathon-24)
![GitHub repo size](https://img.shields.io/github/repo-size/erayates/btk-hackathon-24)
![GitHub License](https://img.shields.io/github/license/erayates/btk-hackathon-24)

Edunote allows people to improve their knowledge by accessing a network of notes. Users can effortlessly search through both public and private notes using Gemini, which functions like a librarian or teacher, guiding you to the information you seek.

Upload your documents, recordings, and videos to create notes with Gemini’s assistance. Accessing your notes and using AIs power is quick and easy, whether through the chat bar or directly within the notes themselves. 

Share your notes in public to join the note network. Create tags to reach more people. A little tip here, find your tag of your university and department. *Reach people using in-app message features and expand your network. Share posts and notes in public or private groups. Create your private group to keep it private.*

## Demo

*Available soon...*


## Features

<details>
<summary> <b> <samp>Edunote Landin Page</samp></b></summary>
<samp>

<img src="Docs/ss/full.png">

#### More Notes
<img src="Docs/ss/morestab.png">
<img src="Docs/ss/likestab.png">

</samp>
</details>

<details>
<summary> <b> <samp>AI Powered Notes</samp></b></summary>
<samp>

#### Use AI in Your Notes
<img src="Docs/ss/noteoptions.png">
<img src="Docs/ss/noteoptionsinside.png">
<img src="Docs/ss/noteoptionsexample.png">
<img src="Docs/ss/notevideoexample.png">


#### Note Settings
<img src="Docs/ss/notesettings.png">

</samp>
</details>

<details>
<samp>

### Special Ai

#### Youtube
<img src="btk-hackathon-24\Docs\ss\ai-yt.png">

#### PDF
<img src="btk-hackathon-24\Docs\ss\ai-pdf.png">

#### Audio
<img src="btk-hackathon-24\Docs\ss\ai-audio.png">

#### Image
<img src="btk-hackathon-24\Docs\ss\ai-image.png">

</samp>
</details>

## Planned Features

- **Groups:** Share posts and notes in public or private groups. Create your group to chat in private.
- **Messages:** Reach others by sending a message in place. Chat with others and to expand your network.
- **Personalized Note Creation:** Improved user experience with learning-based features with Gemini to create notes in personalized styles.
- **Integrations:** Integration with other applications (Google Drive, Evernote, Zoom, etc.).
- **Light/Dark Theme**
- **Mindmap Styled Note Network**

## API Reference

<details>
<summary> <b> <samp> See API Reference </samp></b></summary>
<samp>
<br>

### Gemini Operation

#### Interact with Gemini AI

```http
  POST /gemini/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `option	` | `string` | The type of content generation to perform. |
| `prompt` | `string` | **Required**. The input text to be processed. |
| `command` | `string` | **Optional** command for further processing. |
| `user_id` | `string` | **Required**. User ID for tracking interactions. |
| `note_id` | `string` | Default is 'gemini'. Note ID for context. |
| `user_query` | `string` | Specific query related to the prompt. |

### Chat History Operations

#### Retrieve Chat History

```http
  GET /chat/history/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. User ID for which to retrieve chat history. |
| `note_id`      | `string` | **Optional**. Note ID to specify the context of the chat. |

#### GET /chat/clear/

```http
  GET /chat/clear/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. User ID for which to clear chat history. |
| `note_id`      | `string` | **Optional**. Note ID to specify the context of the chat. |

### Elasticsearch Operations

#### Chat with Gemini in Notes

```http
  POST /search/ask/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. The specific search query. |
| `user_id`      | `string` | **Required**. User ID to filter the search results. |
| `public_search`      | `boolean` | **Optional**. Defaults to 'false'. Flag to indicate if public notes should be included. |

#### Simple Search

```http
  POST /search/simple/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. The search query string. |

#### Detailed Search

```http
  POST /search/all/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `object` | **Required**. JSON body containing the search criteria. |

### File Operations

#### Extract Transcript from YouTube Video

```http
  POST /caption/extract/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `youtube_video_id`      | `string` | **Required**. The ID of the YouTube video from which to extract captions. |
| `only_transcript`      | `boolean` | **Optional**. Flag to indicate if only the transcript should be extracted. |

#### Extract Text from File

```http
  POST /file/extract/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `file`      | `UploadFile` | **Required**. The file from which text will be extracted. |

**Supported File Extensions:**
- Audio: `mp3`, `wav`, `aac`, `m4a`, `wma`
- Pdf: `pdf`
- Image: `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`


#### Check File Existence

```http
  POST /file/check/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. User ID for tracking the file. |
| `file_name`      | `string` | **Required**. Name of the file to check if exists. |

#### Download File

```http
  POST /file/download/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. User ID for tracking the file. |
| `file_name`      | `string` | **Required**. Name of the file to be downloaded. |

#### Upload Files

```http
  POST /file/upload/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. User ID for tracking the file. |
| `if_exists`      | `boolean` | **Optional**. Defaults to 'False'. Flag to indicate if the file should be replaced if it already exists. |
| `files`      | `List<UploadFile>` | **Required**. List of files to be uploaded. |

</samp>
</details>

## License

[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](LICENSE)

## Support

For support, email to [eray.ates@outlook.com](mailto:eray.ates@outlook.com) or [orhun868@gmail.com](mailto:orhun868@gmail.com).


## Contributing

Please contact to contribute.

See [`CONTRIBUTING.md`](.github/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [`CODE_OF_CONDUCT.md`](.github/CODE_OF_CONDUCT.md).

## Acknowledgements

 - [Test dataset: Articles.csv](Functions/Data/Articles.csv) [See Data on Kaggle](https://www.kaggle.com/datasets/asad1m9a9h6mood/news-articles)
 - [Test dataset: test.csv](Functions/Data/Articles.csv) [See Data on Kaggle](https://www.kaggle.com/datasets/arashnic/urban-sound)
 - [Tag dataset: world-universities.csv](Functions/Data/Articles.csv) [See Data on Kaggle](https://www.kaggle.com/datasets/thedevastator/all-universities-in-the-world)
