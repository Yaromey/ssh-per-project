# ssh-per-project
Instructions on how to use ssh for multiple github projects
1. Create SSH key

2. Edit ~/.ssh/config
Host github
  Hostname github.com
  IdentityFile ~/.ssh/id_rsa.whatever
  IdentitiesOnly yes
  
3. Should look like this.
Host personal
  Hostname github.com
  IdentityFile ~/.ssh/githubpersonal
  IdentitiesOnly yes

Host work
  Hostname github.com
  IdentityFile ~/.ssh/githubwork
  IdentitiesOnly yes
4. Remove conflicts
4.1 git remote remove origin
4.2 git remote add origin git@personal:username/repository.git
