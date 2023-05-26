/* eslint-disable no-unused-vars */
import Mailjet from 'node-mailjet'

const MJ_APIKEY_PUBLIC = process.env.MJ_APIKEY_PUBLIC
const MJ_APIKEY_PRIVATE = process.env.MJ_APIKEY_PRIVATE

enum MJLists {
  RELEASE = 43450,
}

enum MJTemplates {
  WELCOME = 4673299,
}

const mailjet = Mailjet.apiConnect(
  MJ_APIKEY_PUBLIC || 'your-api-key',
  MJ_APIKEY_PRIVATE || 'your-api-secret',
  {
    config: {},
    options: {},
  },
)

async function sendWelcomeEmail(email: string) {
  await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'contato@allnftlab.com',
          Name: 'Zico: The Legacy Collection',
        },
        To: [
          {
            Email: email,
          },
        ],
        TemplateID: MJTemplates.WELCOME,
        TemplateLanguage: true,
        Subject: 'Você já está um passo mais perto do Zico!',
      },
    ],
  })
}

export { mailjet, MJLists, MJTemplates, sendWelcomeEmail }
