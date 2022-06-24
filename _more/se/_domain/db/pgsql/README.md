
## postgresql 設定

## gitea example

```
wsl> createdb gitea
wsl> psql gitea
psql (13.4 (Ubuntu 13.4-1.pgdg20.04+1))
Type "help" for help.
wsl> createuser -P -s -e cccpg
Enter password for new role: 
Enter it again: 
SELECT pg_catalog.set_config('search_path', '', false);
CREATE ROLE cccpg PASSWORD 'md568270cb105609182c85f7901ce3a8304' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN; 
```