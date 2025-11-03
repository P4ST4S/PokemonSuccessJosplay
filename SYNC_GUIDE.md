# Guide de Synchronisation

## Configuration

1. Copie `.env.example` vers `.env`
2. Modifie `ADMIN_USERNAME` et `ADMIN_PASSWORD` avec tes identifiants
3. La `DATABASE_URL` est déjà configurée avec Neon

## Comment synchroniser ta progression

### Option 1: Via le navigateur (console)

Ouvre la console du navigateur (F12) sur ta page et exécute :

```javascript
// Récupère tes succès depuis localStorage
const completed = JSON.parse(localStorage.getItem('mii-achievements::completed') || '[]');

// Sync avec la base de données
fetch('/api/sync', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('josplay:ton-mot-de-passe')
  },
  body: JSON.stringify({ completedIds: completed })
})
.then(r => r.json())
.then(data => console.log('Synced!', data));
```

### Option 2: Via curl

```bash
curl -X POST http://localhost:3000/api/sync \
  -u josplay:ton-mot-de-passe \
  -H "Content-Type: application/json" \
  -d '{"completedIds": ["achievement-1", "achievement-2"]}'
```

## Pages disponibles

- `/` - Ta page personnelle avec localStorage
- `/josplay` - Page publique en lecture seule qui affiche ta progression

## Comment ça marche

1. Tu valides des succès sur `/` (sauvegardé dans localStorage)
2. Tu synchronises avec l'API `/api/sync` (authentifié)
3. Ta progression est stockée dans Neon (PostgreSQL)
4. Tout le monde peut voir ta progression sur `/josplay` (public, pas de compte nécessaire)
