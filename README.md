# How to manage multiple ssh-keys & automatically load them

## Problems you may have with SSH:   
- Conflicting SSH keys
- Set your personal SSH key from GitHub -> unset your work SSH. Having to login manually in SSH every single time...
- Hairloss and broken keyboard due to stress of not getting it to work 👨🏻‍🦲

## Solution in a nutshell:
Remove your current remote (now it's porbably http instead of ssh or tied to the wrong ssh key). Add it, but via another way! 
Below I'll try to explain it to you step-by-step. Feel free to ask questions if you can't get it to work.

## Assumptions
1. Your terminal is running in the `~/.ssh/` folder.
2. You generated the ssh files using `ssh-keygen -t rsa -C "example@youremailprovider.com"`
3. You type in a filename for your ssh keys. I'd recommend to put your username in it. (PS: You're already in ~/.ssh so no need to enter path if asked in prev step)
4. You had ssh-agent running so it did go without errors.
5. You pasted your beautifullfilename.pub contents to Github via [GitHub (add SSH key link)](https://github.com/settings/ssh/new)

### TLDR;   
1. Create host file, probably you want to create it in `~/.ssh/` folder
2. Name this host file "config" (without any file-extensions)
3. Use template below to add hosts, use a nice [subdomain].domain-name in `Host` (not mistaken with Hostname!)
4. Point to your ssh key in the field `IdentityFile`
5. See below for example on what your file can look like

```
# Example host file (named config, probably you want to put it in .ssh folder)
Host mebusiness.github.com     
  Hostname github.com
  IdentityFile ~/.ssh/githubpersonal   
  IdentitiesOnly yes
Host mepersonal.github.com     
  Hostname bitbucket.com
  IdentityFile ~/.ssh/githubpersonal   
  IdentitiesOnly yes
```

5. Add our new remote to Git! _(And replace the emoji to the value you've used in the config file)._

```
`git remote add origin git@:username/repository.git `
```


1. `git remote remove origin`
2. `git remote add origin git@<<<subdomain.domain.com>>:<<<UserNameInGitHub>>>/existing-repo.git`
3. Example:  `git remote add origin git@me.github.com:Yaromey/existing-repo-url.git`
4. Don't forget the `.git` extension

# Bonus!! --> Start your ssh agent automatically and add your keys to the agent everytime you open a Bash terminal:
1. Go to your .bashrc file (user root directory) or just create one.
2. Put this code in it -- V
```
if [ -z "$SSH_AUTH_SOCK" ] ; then
 eval `ssh-agent -s`
 ssh-add ~/.ssh/MY_PERSONAL_SSH_FILE
 ssh-add ~/.ssh/MY_WORK_SSH_FILE
 ssh-add ~/.ssh/MY_OTHER_SECONDARY_ACCOUNT_SSH_FILE
fi
```

