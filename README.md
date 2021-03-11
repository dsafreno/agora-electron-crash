Build steps (Intel mac):
1) Install node >= 14.16.0 and yarn
2) Build on with `yarn && ./node_modules/.bin/electron-builder --mac`

Test (Intel mac):
1) Install `dist/Crash.dmg` on an Intel mac, then run it. You should see "Loading..." then "Success!".

Test (M1 mac):
1) Copy over and install `dist/Crash arm64.dmg` on a M1 mac, then run it. You should see "Loading..." then the crash.