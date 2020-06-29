# itssummernoscarfs
There's no time for scarfs, it's summer already 🏊

## Why

Because JS ecosystem and OSS is not that place for running spyware like @scarf-sh/scarfjs.
Don't understand me wrong, I like OSS and there is npm for viewing stats for your library but I don't like when some 3rdparty library places spyware-like library on EVERY INSTALL.

## How to use

1. Install packages WITHOUT running scripts, like postinstall:

```sh
npm install --ignore-scripts
```

If you use yarn then -Scarf- Shit analytics won't run after install.

2. Run patcher which will change fix installation links to public gist that simply mock library and makes clear visible that is mocked.

```
npx itssummernoscarfs
```

3. Remove @scarf/scarf folder from your node_modules or do rm -rf node_modules/

4. Install deps again with your favorite package manager.