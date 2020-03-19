# Cron Jobs

Sometimes you'll have a script that you want to run at preset intervals. For example, maybe you want to clean up all the old screenshots on your desktop once a week. You can use cron jobs to automate these repetitive tasks.

* `crontab -l`: List the cron jobs for the current user
* `crontab -e`: Edit the list of cron jobs for the current user

## Cron Job Format

```
* * * * * command to execute
```

Each `*` represents a value, listed in order here:

* Minute (`0` - `59`)
* Hour (`0` - `23`)
* Day of month (`1` - `31`)
* Month (`1` - `12`)
* Day of week (`0` - `6` (where `0` is Sunday), *or* `SUN` - `SAT`)

## Examples

### Execute a script every minute

```
* * * * * ./runScript.sh
```

### Execute a script every 5 minutes

```
*/5 * * * * ./runScript.sh
```

### Execute a script every Sunday at 10:30AM

```
30 10 * * 0 ./runScript.sh
```

## Resources

* [OSTechNix: A Beginner's Guide To Cron Jobs](https://www.ostechnix.com/a-beginners-guide-to-cron-jobs/)
