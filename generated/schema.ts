// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Assign extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Assign entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Assign entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Assign", id.toString(), this);
  }

  static load(id: string): Assign | null {
    return store.get("Assign", id) as Assign | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get assignedTo(): Bytes {
    let value = this.get("assignedTo");
    return value.toBytes();
  }

  set assignedTo(value: Bytes) {
    this.set("assignedTo", Value.fromBytes(value));
  }

  get punkIndex(): Bytes {
    let value = this.get("punkIndex");
    return value.toBytes();
  }

  set punkIndex(value: Bytes) {
    this.set("punkIndex", Value.fromBytes(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get transferedValue(): BigInt {
    let value = this.get("transferedValue");
    return value.toBigInt();
  }

  set transferedValue(value: BigInt) {
    this.set("transferedValue", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class PunkTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PunkTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PunkTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PunkTransfer", id.toString(), this);
  }

  static load(id: string): PunkTransfer | null {
    return store.get("PunkTransfer", id) as PunkTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class PunkOffered extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PunkOffered entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PunkOffered entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PunkOffered", id.toString(), this);
  }

  static load(id: string): PunkOffered | null {
    return store.get("PunkOffered", id) as PunkOffered | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class PunkBidEntered extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PunkBidEntered entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PunkBidEntered entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PunkBidEntered", id.toString(), this);
  }

  static load(id: string): PunkBidEntered | null {
    return store.get("PunkBidEntered", id) as PunkBidEntered | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class PunkBidWithdrawn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PunkBidWithdrawn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PunkBidWithdrawn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PunkBidWithdrawn", id.toString(), this);
  }

  static load(id: string): PunkBidWithdrawn | null {
    return store.get("PunkBidWithdrawn", id) as PunkBidWithdrawn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class PunkNoLongerForSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PunkNoLongerForSale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PunkNoLongerForSale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PunkNoLongerForSale", id.toString(), this);
  }

  static load(id: string): PunkNoLongerForSale | null {
    return store.get("PunkNoLongerForSale", id) as PunkNoLongerForSale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}

export class PunkBought extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PunkBought entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PunkBought entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PunkBought", id.toString(), this);
  }

  static load(id: string): PunkBought | null {
    return store.get("PunkBought", id) as PunkBought | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transactionDate(): BigInt {
    let value = this.get("transactionDate");
    return value.toBigInt();
  }

  set transactionDate(value: BigInt) {
    this.set("transactionDate", Value.fromBigInt(value));
  }
}