import { cpSync, copyFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const result = spawnSync(process.execPath, [
  join(root, 'node_modules/@angular/cli/bin/ng.js'),
  'build', '--base-href', '/MyWebSite/'
], { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const output = join(root, 'dist/my-web-site/browser');
for (const entry of readdirSync(output)) {
  cpSync(join(output, entry), join(root, entry), { recursive: true });
}
copyFileSync(join(output, 'index.html'), join(root, '404.html'));
console.log('GitHub Pages: файлы обновлены в корне, base-href /MyWebSite/.');
