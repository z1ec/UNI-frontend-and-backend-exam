# Node.js CI/CD Example

Минимальный пример Node.js проекта с настроенным CI/CD.

## Структура проекта

```
project/
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions
├── .gitlab-ci.yml        # GitLab CI
├── index.js              # Основной код
├── index.test.js         # Тесты
├── package.json
└── .gitignore
```

## Запуск тестов локально

```bash
npm test
```

## CI/CD

### GitHub Actions
Файл `.github/workflows/ci.yml` — автоматически запускает тесты при каждом push.

### GitLab CI
Файл `.gitlab-ci.yml` — аналогичный пайплайн для GitLab.

## Этапы пайплайна

1. `actions/checkout` — клонирование репозитория
2. `actions/setup-node` — установка Node.js 20
3. `npm ci` — установка зависимостей по lock-файлу
4. `npm test` — запуск тестов
# UNI-frontend-and-backend-exam
