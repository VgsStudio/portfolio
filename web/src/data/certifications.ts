import clf from '../assets/certs/01-clf.png'
import aif from '../assets/certs/02-aif.png'
import aibs from '../assets/certs/03-aibs.png'
import saa from '../assets/certs/04-saa.png'
import dva from '../assets/certs/05-dva.png'
import soa from '../assets/certs/06-soa.png'
import mla from '../assets/certs/07-mla.png'
import dea from '../assets/certs/08-dea.png'
import sap from '../assets/certs/09-sap.png'
import aip from '../assets/certs/10-aip.png'
import dop from '../assets/certs/11-dop.png'
import scs from '../assets/certs/12-scs.png'

export const credlyProfile = 'https://www.credly.com/users/vitor-guirao-soller'

const credly = (id: string) => `https://www.credly.com/badges/${id}`

export const certLevels = ['Foundational', 'Associate', 'Professional', 'Specialty']

// Fonte: perfil público do Credly (consultado em 10/11/2026).
export const awsCertifications = [
  { level: 'Foundational', badge: clf, name: 'AWS Certified Cloud Practitioner', issued: 'jul/2024', url: credly('d954bb40-273b-4614-b240-a1e262cea682') },
  { level: 'Foundational', badge: aif, name: 'AWS Certified AI Practitioner', issued: 'fev/2026', url: credly('2c83321f-ae36-497f-bfbf-7227fbea3315') },
  { level: 'Foundational', badge: aibs, name: 'AWS Certified AI Business Strategist', issued: 'out/2026', url: credly('3b72833f-819b-47d3-b4e9-caf0b5806f4e') },
  { level: 'Associate', badge: saa, name: 'AWS Certified Solutions Architect – Associate', issued: 'ago/2025', url: credly('ff4fd18c-e898-48a2-9748-b33bfc4553d3') },
  { level: 'Associate', badge: dva, name: 'AWS Certified Developer – Associate', issued: 'abr/2026', url: credly('e2469cfe-f313-44aa-9eef-ea214f222ea6') },
  { level: 'Associate', badge: soa, name: 'AWS Certified CloudOps Engineer – Associate', issued: 'ago/2026', url: credly('b9baa262-f9cc-410b-a559-19e419878526') },
  { level: 'Associate', badge: mla, name: 'AWS Certified Machine Learning Engineer – Associate', issued: 'set/2026', url: credly('4d99927c-2aa0-41aa-bce0-7f96face076f') },
  { level: 'Associate', badge: dea, name: 'AWS Certified Data Engineer – Associate', issued: 'out/2026', url: credly('4d74a190-924b-42d8-83a2-878b17a9ba89') },
  { level: 'Professional', badge: sap, name: 'AWS Certified Solutions Architect – Professional', issued: 'jul/2026', url: credly('14c95bbd-ca7f-4cf5-92ff-9fa549e46a2f') },
  { level: 'Professional', badge: aip, name: 'AWS Certified Generative AI Developer – Professional', issued: 'out/2026', url: credly('7e249b68-b5b4-41a1-a6c8-8d26c967c79e') },
  { level: 'Professional', badge: dop, name: 'AWS Certified DevOps Engineer – Professional', issued: 'nov/2026', url: credly('6e3d4f0e-9102-4cbb-97da-51567503440f') },
  { level: 'Specialty', badge: scs, name: 'AWS Certified Security – Specialty', issued: 'jul/2026', url: credly('37f1247b-2d76-42f5-818a-536b1e52fcc4') },
]

export const extraCredentials = [
  { name: 'AWS Academy Graduate – Cloud Foundations', issued: 'mai/2024' },
  { name: 'Basics of Quantum Information (IBM)', issued: 'jan/2025' },
  { name: 'AWS Knowledge: Amazon Braket', issued: 'ago/2025' },
  { name: 'AWS AI Business Strategist Early Adopter', issued: 'out/2026' },
]
