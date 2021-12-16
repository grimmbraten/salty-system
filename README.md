A salty node package to quickly generate salted hashes for system UUIDs.

## Install

![npm](https://img.shields.io/npm/v/salty-system?style=flat&color=blue)
![NPM](https://img.shields.io/npm/l/salty-system?style=flat&color=blue)

```bash
yarn global add salty-system
```

```bash
npm install -g salty-system
```

## Upgrade

![npms.io (maintenance)](https://img.shields.io/npms-io/maintenance-score/salty-system?style=flat&color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/grimmbraten/salty-system?style=flat&color=blue)
![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/grimmbraten/salty-system/latest/main?style=flat&color=blue)

```bash
yarn global upgrade salty-system --latest
```

```bash
npm update -g salty-system
```

## Usage

```bash
# input
salty c2c5e1dc-7219-4450-9300-9013549b50c2

# output (to clipboard)
$2a$10$6IaEwf2ch4eXonRnWrs2xOjYumgu7fLvnsj6ba/0cFvVhi.dCveGq
```

```bash
# input
salty --id c2c5e1dc-7219-4450-9300-9013549b50c2 --name 'Salty user' --email 'salty@domain.com'

# output (to terminal)
{
  id: 'c2c5e1dc-7219-4450-9300-9013549b50c2',
  name: 'Salty user',
  email: 'salty@domain.com',
  hash: '$2a$10$1T9fyitJo0tHPL/RTDznsekGDJ0/Dw.Z2oZAHWPi0HLvyI7sMPcpe'
}
```

```bash
# input
salty --copy --id c2c5e1dc-7219-4450-9300-9013549b50c2 --name 'Salty clipboard'

# output (to clipboard)
c2c5e1dc-7219-4450-9300-9013549b50c2, Salty clipboard, $2a$10$pRZ2V34HT77SpAUm0lLYTOB01XHKKEcbd9eYTvTgaElJakokpejEW
```

## Uninstall

```bash
yarn global remove salty-system
```

```bash
npm uninstall -g salty-system
```

![GitHub Repo stars](https://img.shields.io/github/stars/grimmbraten/salty-system?style=social)
![npm](https://img.shields.io/npm/dt/salty-system?logo=npm&style=social)
