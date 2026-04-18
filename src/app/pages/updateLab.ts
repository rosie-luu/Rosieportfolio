import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('/src/app/pages/Lab.tsx', 'utf8');

// Update all descriptionTitle to "The Context" (except The Challenge for Moon Drawer, which I'll handle separately)
content = content.replace(/descriptionTitle:\n?\s*".*?"/g, 'descriptionTitle: "The Context"');

// Update all insightTitle to "The Execution"
content = content.replace(/insightTitle:\n?\s*".*?"/g, 'insightTitle: "The Execution"');

writeFileSync('/src/app/pages/Lab.tsx', content);
