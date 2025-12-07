#!/bin/bash

# Color mapping script
# Old colors -> New colors

# This script updates all component files with the new color palette

cd components

# terracotta -> rust (primary accent)
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-50/rust-50/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-100/rust-100/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-200/beige-200/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-300/rust-300/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-400/rust-400/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-500/rust-500/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-600/rust-600/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-700/rust-700/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-800/rust-800/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/terracotta-900/rust-900/g' {} \;

# earth -> brown/navy/green (context dependent)
find . -type f -name "*.tsx" -exec sed -i 's/earth-50/cream-50/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-100/beige-100/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-200/beige-200/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-300/beige-300/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-400/brown-400/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-500/brown-500/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-600/green-600/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-700/green-600/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-800/navy-800/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/earth-900/navy-900/g' {} \;

# warm -> gold/beige
find . -type f -name "*.tsx" -exec sed -i 's/warm-50/cream-50/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-100/beige-100/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-200/beige-200/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-300/beige-300/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-400/gold-400/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-500/gold-500/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-600/gold-600/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-700/gold-700/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-800/brown-800/g' {} \;
find . -type f -name "*.tsx" -exec sed -i 's/warm-900/brown-900/g' {} \;

echo "Color updates complete!"
