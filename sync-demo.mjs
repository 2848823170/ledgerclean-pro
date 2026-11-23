#!/usr/bin/env node
/**
 * Syncs the freshly built `ventures/product-01/dist/demo.html` into `ventures/storefront-site/demo.html`
 * and verifies that the production Ed25519 public key and strict CSP are intact.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { OFFICIAL_PUBLIC_KEY_SPKI_B64 } from '../product-01/src/core/license.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDemo = path.resolve(__dirname, '..', 'product-01', 'dist', 'demo.html');
const dstDemo = path.resolve(__dirname, 'demo.html');

if (!fs.existsSync(srcDemo)) {
  throw new Error(`Missing source demo build: ${srcDemo}. Run 'npm run build' in ventures/product-01 first.`);
}

const html = fs.readFileSync(srcDemo, 'utf8');
if (!html.includes("connect-src 'none'")) {
  throw new Error('Source demo.html is missing strict CSP connect-src none.');
}
if (!html.includes(OFFICIAL_PUBLIC_KEY_SPKI_B64)) {
  throw new Error('Source demo.html does not embed current OFFICIAL_PUBLIC_KEY_SPKI_B64.');
}

fs.copyFileSync(srcDemo, dstDemo);
const sizeKb = (fs.statSync(dstDemo).size / 1024).toFixed(1);
console.log(`Synced ventures/storefront-site/demo.html (${sizeKb} KB) with Ed25519 key ${OFFICIAL_PUBLIC_KEY_SPKI_B64}`);
