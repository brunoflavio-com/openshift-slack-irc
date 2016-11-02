# openshift-slack-irc

> Uses [slack-irc](https://github.com/ekmartin/slack-irc) and a [openshift v2 node.js cartridge](https://developers.openshift.com/languages/nodejs/getting-started.html) to connects Slack and IRC channels.

## Configuration

See the [slack-irc documentation for example configuration files](https://github.com/ekmartin/slack-irc#configuration).

Place the configuration file in the `$OPENSHIFT_DATA_DIR`:
```bash
$> rhc ssh openshiftCartridgeName
[openshiftCartridgeName-yourDomain.rhcloud.com XXXX]\> cd $OPENSHIFT_DATA_DIR
[openshiftCartridgeName-yourDomain.rhcloud.com data]\> #place the config.json file here.
```

## Behaviour

Openshift is expecting a web port to be listening on `$OPENSHIFT_NODEJS_PORT`, at the moment the standard webpage is displayed (index.html file).
This could be improved to tell a bit more about the bot status.
