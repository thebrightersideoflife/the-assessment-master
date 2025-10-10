// src/utils/unitConverter.js
export class UnitConverter {
  static parseValueAndUnit(input) {
    if (!input || typeof input !== 'string') return { value: null, unit: null };

    const normalized = input
      .trim()
      .toLowerCase()
      .replace('≈', '')
      .replace(',', '.')
      .replace(/\s+/g, '');

    const match = normalized.match(/^(-?\d*\.?\d+(?:e[+-]?\d+)?)([a-zμ²^0-9]*)$/i);
    if (!match) return { value: null, unit: null };

    const value = parseFloat(match[1]);
    const unit = match[2] || null;

    if (isNaN(value)) return { value: null, unit: null };

    const validUnits = [
      'm', 'mm', 'cm', 'km',
      'g', 'kg', 'mg',
      's', 'sec', 'min', 'h', 'hr',
      'l', 'ml',
      'm²', 'm^2', 'cm²', 'cm^2', 'km²', 'km^2',
      '%'
    ];

    const normalizedUnit = unit
      ? unit.replace(/²/g, '^2').replace(/³/g, '^3')
      : null;

    const isValid = !unit || validUnits.includes(normalizedUnit);
    if (!isValid) return { value: null, unit: null, invalidUnit: unit };

    return { value, unit: normalizedUnit };
  }

  static toSI(value, unit) {
    if (value == null || unit == null) return null;
    switch (unit) {
      // Length
      case 'mm': return value / 1000;
      case 'cm': return value / 100;
      case 'm': return value;
      case 'km': return value * 1000;

      // Area
      case 'm^2': return value;
      case 'cm^2': return value / 10000;
      case 'km^2': return value * 1_000_000;

      // Time
      case 's':
      case 'sec': return value;
      case 'min': return value * 60;
      case 'h':
      case 'hr': return value * 3600;

      // Mass
      case 'mg': return value / 1_000_000;
      case 'g': return value / 1000;
      case 'kg': return value;

      // Volume
      case 'ml': return value / 1000;
      case 'l': return value;

      // Percent
      case '%': return value / 100;

      default: return null;
    }
  }

  static compareWithUnits(userInput, correctInput, options = {}) {
    const { tolerance = 0.0001, requiredUnit = null, acceptedUnits = [] } = options;

    const userParsed = this.parseValueAndUnit(userInput);
    const correctParsed = this.parseValueAndUnit(correctInput);

    if (userParsed.value == null || correctParsed.value == null) {
      return {
        equivalent: false,
        unitError: true,
        message: 'Invalid value or unit',
      };
    }

    const userSI = this.toSI(userParsed.value, userParsed.unit);
    const correctSI = this.toSI(correctParsed.value, correctParsed.unit);

    if (userSI == null || correctSI == null) {
      return {
        equivalent: false,
        unitError: true,
        message: 'Unsupported unit conversion',
      };
    }

    // 🔸 Check fixed required unit (takes precedence)
    if (requiredUnit && userParsed.unit !== requiredUnit) {
      return {
        equivalent: false,
        unitError: true,
        message: `Unit must be ${requiredUnit}`,
      };
    }

    // 🔸 Check accepted units (e.g., km or m)
    if (acceptedUnits.length > 0 && !acceptedUnits.includes(userParsed.unit)) {
      return {
        equivalent: false,
        unitError: true,
        message: `Unit must be one of: ${acceptedUnits.join(', ')}`,
      };
    }

    const isEquivalent = Math.abs(userSI - correctSI) <= tolerance * Math.abs(correctSI);

    return {
      equivalent: isEquivalent,
      unitError: false,
      message: isEquivalent ? 'Values are equivalent' : 'Values are not equivalent',
    };
  }
}
