// ai-gateway-demo.ts
import 'dotenv/config';

const apiKey = process.env.AI_GATEWAY_API_KEY;

if (!apiKey) {
  console.error('AI_GATEWAY_API_KEY is not set in .env');
  process.exit(1);
}

console.log('AI Gateway API Key loaded:', apiKey);
// Here you would add your AI Gateway SDK usage code
// Example: import { AI } from 'ai';
// const ai = new AI({ apiKey });
// ...
