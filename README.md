# MyDay - Attempt 3

It's gonna work this time. Believe me.

## Requirements

- Yarn or NPM package managers
- NodeJS >= 14
- Python >= 3.6
- Poetry package manager

## Getting Started


```bash
$ yarn install

```
```bash
$ ./bootstrap.sh
```
```bash
$ yarn dev
```


## Caveats

**ATTENTION:** `$ yarn` and `$ yarn dev` use `poetry` cli in the background.

If you **DO WISH** to use `pip` or any other python package manager edit `package.json` file by removing `poetry` commands
from `prepare` and `dev` scripts. **Remember** to **always** source your python virtual environment **before** running `$ yarn dev` and to install the dependencies stated in pyproject.toml .

`bootstrap.sh` runs `poetry` in the background too, so you'll need to remove `poetry run` from the script and update it accordingly your python pacakge manager.
