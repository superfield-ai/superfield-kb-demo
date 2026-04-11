# superfield-kb

An autolearning knowledge base — a system that continuously ingests, indexes, and surfaces knowledge from connected sources, improving its retrieval and summarization quality over time.

Core project documentation lives in [docs/README.md](docs/README.md).

The `packages/core` package exports field-level AES-256-GCM helpers for PRD §7 sensitive entity properties, including `encryptField`, `decryptField`, `encryptProperties`, `decryptProperties`, `assertEncryptedBeforeWrite`, `PlaintextWriteError`, `SENSITIVE_FIELDS`, and the expanded `EntityType` surface for encrypted entities.

Blueprint documentation is sourced from the `./calypso-blueprint` git submodule. Agent scripts live in the `.agents` git submodule. After a fresh clone, initialise both submodules:

```sh
git submodule update --init
```
