const DeleteConfirmMessage = () => {
  return (
    <div className="content-wrapper">
      <p>
        This action cannot be undone. Once your account is deleted, all your
        data, including personal information, settings, and content, will be
        permanently removed. Please make sure you have saved any important
        information before proceeding.
      </p>
      <h6>What Will Be Lost:</h6>
      <ul>
        <li>
          <strong>Personal Data:</strong> All personal information associated
          with your account, such as your name, email address, and contact
          details, will be permanently deleted.
        </li>
        <li>
          <strong>Account History:</strong> Any history of interactions,
          including login records, activity logs, and transaction histories,
          will be lost.
        </li>
        <li>
          <strong>Saved Content:</strong> All content you have created or saved,
          including posts, photos, files, or preferences, will be removed.
        </li>
        <li>
          <strong>Subscriptions & Memberships:</strong> Any active
          subscriptions, memberships, or services tied to your account will be
          canceled, and access will be lost.
        </li>
        <li>
          <strong>Settings & Preferences:</strong> All personalized settings and
          preferences related to your account will be erased.
        </li>
        <li>
          <strong>Access to Services:</strong> You will lose access to any
          services or features that require login credentials linked to this
          account.
        </li>
      </ul>
      <p>
        Please ensure you have backed up any important information before
        proceeding with account deletion.
      </p>

      <p>
        If you’re experiencing issues or have concerns, consider reaching out to
        our support team for assistance. You might find a solution that doesn’t
        require deleting your account.
      </p>
      <div>
        <input type="checkbox" id="delete-chekbox" required />
        <label htmlFor="delete-checkbox">
          I confirm that I have read and understand the consequences of deleting
          my account.
        </label>
      </div>
    </div>
  );
};

export default DeleteConfirmMessage;
