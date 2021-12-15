# Instructions on how to use SSH for multiple GitHub projects & multiple accounts.

## Problems you may have:   
- Conflicting SSH keys.
- Set one SSH key in GitHub another project won't be able to fetch anymore and vice versa.
- Hairloss and broken keyboard due to stress of not getting it to work 👨🏻‍🦲

## Solution:
Remove the remote and add it via another way!

## Assumptions
1. Your email is reprecented by a unicorn! 🦄
2. Your terminal is running in the `~/.ssh/` folder.
3. You generated the ssh files using `ssh-keygen -t rsa -C "🦄@github.com"`
4. You had ssh-agent running. 

### TLDR;   
1. Create host file. 
2. Put a nice name in `Host`
3. Point to your ssh key in `IdentityFile`

```
# Example host file
Host personal     
Hostname github.com
IdentityFile ~/.ssh/githubpersonal   
IdentitiesOnly yes
```

4. _Imagine_ the config file were a javascript object and we had a key called `Host` represented by 🤓 
```
const config = {
  🤓: nerdyguyhostname
}
const 🤓 = config;`
```

5 Add our new remote to Git! _(And replace the emoji to the value you've used in the config file)._

```
`git remote add origin git@:username/repository.git `
```


1. `git remote remove origin`
2. `git remote add origin git@🤓:callmewhateveryouwantcrazy/repository.git`

